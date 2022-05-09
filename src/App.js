import './App.css';

function App() {
  return (
    <div className="App">
      <div id="content">
        <div class="rounded bg-light  mx-auto mt-5 container " id="main">
          <p><b id="question">Question</b></p>
        </div>
        <div class="bg-light  mt-5 container rounded " id="btnCnt">
          <button class="btn-light btn btn_odd" id="option1" onclick="next(this)">option 1</button>
          <button class="btn-Secondary btn btn_even" id="option2" onclick="next(this)">option 2</button>
          <button class="btn-light btn btn_odd" id="option3" onclick="next(this)">option 3</button>
          <button class="btn-Secondary btn btn_even" id="option4" onclick="next(this)">option 4</button>
        </div>
      </div>

      <div id="result_hide">
        <div id="heading" class="bg-light rounded  mx-auto mt-5 container text-center">
          <h1>Congratulations! <span>&#10003;</span></h1>
        </div>
      </div>
    </div>
  );
}

export default App;
