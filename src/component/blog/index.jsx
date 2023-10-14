import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


Index.propTypes = {
    
};

function Index(props) {
    const [formValues, setFormValues] = useState([{ title: "", description : ""}])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.title] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { title: "", description: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    return (
        <div className='container'>
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="mb-3 row g-3" key={index}>
              <div className="col-sm-6">
              <label>Title</label>
              <input type="text" title="title" class="form-control" value={element.title || ""} onChange={e => handleChange(index, e)} />
              </div>
              <div className="col-sm-6">
              <label>Description</label>
              <input type="text" title="description" class="form-control" value={element.description || ""} onChange={e => handleChange(index, e)} />
              </div>
              {
                index ? 
                <div className="col-sm text-end">
                  <button type="button"  className="button remove btn btn-danger" onClick={() => removeFormFields(index)}>Remove</button> 
                  </div>
                : null
              }
              </div>
            
          ))}
          <div className="button-section">
              <button className="button add btn btn-warning me-3" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit btn btn-primary" type="submit">Submit</button>
          </div>
      </form>
      </div>
    );
}

export default Index;