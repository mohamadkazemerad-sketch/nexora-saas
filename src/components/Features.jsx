import { FaRobot, FaChartLine, FaCloud } from "react-icons/fa";

function Features(){

  return(

    <section className="features">

      <h2>
        ویژگی های حرفه ای
      </h2>


      <div className="feature-list">


        <div className="feature-card">

        <FaRobot className="feature-icon"/>

          <h3>
            اتوماسیون هوشمند
          </h3>

          <p>
            ساخت رابط های مدرن و تجربه کاری روان
          </p>

        </div>



        <div className="feature-card">

        <FaChartLine className="feature-icon"/>    

          <h3>
            تحلیل و بهینه سازی
          </h3>

          <p>
            بررسی عملکرد سایت برای نتیجه بهتر
          </p>

        </div>



        <div className="feature-card">

        <FaCloud className="feature-icon"/>

          <h3>
            سیستم امن و سریع
          </h3>

          <p>
            ساخت پروژه های قابل توسعه و حرفه ای
          </p>

        </div>



      </div>


    </section>

  )

}


export default Features;