import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gander, setGander] = useState("");
  const [desc, setDesc] = useState("");
  const [lang, setLang] = useState([]);
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("name", "age", "gander", "lang", "desc"))
  );
  function getData() {
    let data = [];
    if (localStorage.getItem("todos")) {
      data = JSON.parse(localStorage.getItem("todos"));
    }
    return data;
  }
  function handleSave(e) {
    e.preventDefault();
    const obj = {
      name: name,
      age: age,
      gander: gander,
      lang: lang,
      desc: desc,
    };

    let todos = getData();
    todos.push(obj);
    localStorage.setItem("todos", JSON.stringify(todos));
    setAge(0);
    setDesc("");
    setGander("");
    setLang([]);
    setName("");
  }
  function handleCheck(d) {
    let copied = JSON.parse(JSON.stringify(lang));
    if (d.checked) {
      copied.push(d.value);
    } else {
      copied = copied.filter((el) => {
        return el != d.value;
      });
    }
    setLang(copied);
  }

  return (
    <>
      <div className="container border border-4 mt-4 shadow-lg p-3 mb-5 bg-body rounded w-100">
        <h1 className="text-center">Ma'lumotlar To'plai </h1>
        <div className="wrapper border border-4 mt-4 shadow-lg p-3 mb-5 bg-body rounded w-100">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Enter name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Enter age
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                placeholder="Enter age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <label htmlFor="gander" className="form-label">
              Gander
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={gander}
              onChange={(e) => {
                setGander(e.target.value);
              }}
            >
              <option value="gander">Gander</option>
              <option value="erkak">Erkak</option>
              <option value="ayol">Ayol</option>
            </select>

            <div className="languages mt-4 rounded px-3 border border-2 pb-2">
              <label className="form-check-label mt-4">
                What languages ​​do you know
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="uzbek"
                  id="uzbek_l"
                  name="lang"
                  onChange={(e) => {
                    handleCheck(e.target);
                  }}
                />
                <label className="form-check-label" htmlFor="uzbek_l">
                  Uzbek
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="english"
                  id="english_l"
                  name="lang"
                  onChange={(e) => {
                    handleCheck(e.target);
                  }}
                />
                <label className="form-check-label" htmlFor="english_l">
                  English
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="russian"
                  id="russian_l"
                  name="lang"
                  onChange={(e) => {
                    handleCheck(e.target);
                  }}
                />
                <label className="form-check-label" htmlFor="russian_l">
                  Russian
                </label>
              </div>
            </div>
            <div className="form-floating mt-4">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="desc"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></textarea>
              <label htmlFor="desc">Brief information</label>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-primary mt-4 w-100"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>

      <div className="todos border border-4 mt-4 shadow-lg p-3 mb-5 bg-body rounded w-100">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gander</th>
              <th scope="col">Language</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todo &&
              todo.map((el, index) => {
                return (
                  <tr>
                    <th key={index} scope="row">1</th>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.gander}</td>
                    <td>{el.lang}</td>
                    <td>{el.desc}</td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

<tbody></tbody>;
