import React, { Component } from "react";

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [
        {
          language: "",
          level: ""
        }
      ]
    };
  }

  handleAddFields = () => {
    const values = this.props.state;
    values.push({
      language: "",
      level: ""
    });
    this.setState({
      values
    });
  };

  handleRemoveFields = index => {
    const values = this.props.state;
    values.splice(index, 1);
    this.setState({
      values
    });
  };

  async onChange(e, index) {
    if (["language", "level"].includes(e.target.name)) {
      let cats = [...this.props.state];
      cats[index][e.target.name] = e.target.value;
      await this.setState({
        cats
      });
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
    //console.log(this.props.state);
  }

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div
        className="resume_container"
        style={{ top: "60px", position: "relative" }}
      >
        <form>
          <h1>
            <input
              type="text"
              defaultValue="LANGUAGE"
              name="language"
              style={{ border: "none" }}
              onChange={this.props.handleChange}
            />
            <button
              className="btn btn-success float-right w-25 font-weight-bolder"
              type="button"
              onClick={() => this.handleAddFields()}
            >
              + Add
            </button>
          </h1>

          {this.props.state.map((inputField, index) => (
            <div
              key={`${inputField}~${index}`}
              style={{ marginBottom: "20px" }}
            >
              <div className="row">
                <div className="col-sm-6 ">
                  <div className="form-group">
                    <label htmlFor="name" className="label">
                      LANGUAGE{" "}
                    </label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <i className="fa fa-language"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="language"
                        className="form-control"
                        value={inputField.language}
                        onChange={e => {
                          this.onChange(e, index);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 ">
                  <div className="form-group">
                    <label htmlFor="name" className="label">
                      LEVEL{" "}
                    </label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <i className="fa fa-tasks"></i>
                        </span>
                      </div>
                      <select
                        name="level"
                        className="form-control"
                        value={inputField.level}
                        onChange={e => {
                          this.onChange(e, index);
                        }}
                      >
                        <option value=" ">- </option>
                        <option value="Native">Native</option>
                        <option value="Full-Professional">
                          Full Professional
                        </option>
                        <option value="Freelance">Professional Working</option>
                        <option value="Contract">Limited Working</option>
                        <option value="Internship">Elementry Working</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "-30px" }}>
                <button
                  className="btn btn-danger"
                  style={{ marginTop: "30px" }}
                  type="button"
                  onClick={() => this.handleRemoveFields(index)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </form>
        <button onClick={this.back}>Back</button>
        <button onClick={this.saveAndContinue}>Save And Continue </button>
      </div>
    );
  }
}

export default Language;