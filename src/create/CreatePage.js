import React from "react";
import "./CreatePage.css";
import { Link } from "react-router-dom";

const CreatePage = () => {
  return (
    <div className="container">
      <h2>Create an Ad</h2>
      <form>
        <div className="form-group">
          <label class="title">Title</label>
          <input type="text" class="input-field" placeholder="Example" />
        </div>
        <div className="form-group">
          <label class="title">Description</label>
          <input
            type="text"
            class="input-field"
            placeholder="Example"
            name="title"
            required
          />
        </div>
        <div className="form-group">
          <label class="title">URL</label>
          <input
            type="url"
            class="input-field"
            placeholder="Https://"
            name="url"
            required
          />
        </div>
        <div className="form-group">
          <label class="title">Expire Date</label>
          <input
            type="date"
            class="input-field"
            placeholder="Https://"
            name="expireDate"
            required
          />
        </div>
        <div className="form-group">
          <label class="title">Upload Banner</label>
          <div className="upload-btn">
            <i className="upload-icon">&#128193;</i>
            <label class="title">Upload Image</label>
          </div>
          <div className="file-info">PNG, JPG | Max: 5mg</div>
        </div>
        <button type="submit">Submit</button>
        <button type="button" className="cancel-btn">
          Cancel
        </button>
      </form>
      <Link to="/">
        <p style={{ float: "right" }}>login page</p>
      </Link>
    </div>
  );
};

export default CreatePage;
