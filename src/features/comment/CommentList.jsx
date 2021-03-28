import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, } from 'react';
import { Link } from "react-router-dom";
import { fetchComment } from './commentSlice';

export function CommentList() {
  const dispatch = useDispatch()
  const { entities } = useSelector((state) => state.comment);
  const loading = useSelector((state) => state.loading);

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchComment(page + 1))
  }, [page, dispatch]);

  function updatePage() {
    console.log('--Indside', page);
    setPage(page + 1)
  }

  return (
    <div className="container">
      <div className="row">
        <h3>Comment Listing</h3>
      </div>
      <div className="row">
        <div className="two columns">
        </div>
        <div className="two columns">
          <Link to="/comment">
            <button className="button-primary" onClick={() => updatePage()} >Refesh</button>
          </Link>
          <Link to="/">
            <button className="button-primary">Back</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
                <th>Post Id</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ _id, name, email, body, postId }, i) => (
                  <tr key={i}>
                    <td>{_id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{body}</td>
                    <td>{postId}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
