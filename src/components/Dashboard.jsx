function Dashboard(){

  return(

    <section className="dashboard-section">


      <div className="dashboard-box">


        <div className="dashboard-top">

          <h2>
            داشبورد مدیریت
          </h2>

          <span>
            فعال
          </span>

        </div>



        <div className="stats">


          <div>
            <h3>
              24.8K
            </h3>

            <p>
              کاربر فعال
            </p>

          </div>



          <div>
            <h3>
              92%
            </h3>

            <p>
              سرعت پروژه
            </p>

          </div>



          <div>
            <h3>
              $48K
            </h3>

            <p>
              رشد ماهانه
            </p>

          </div>


        </div>



        <div className="fake-chart">

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>



      </div>


    </section>

  )

}


export default Dashboard;