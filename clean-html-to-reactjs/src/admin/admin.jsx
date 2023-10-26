import React, { useState } from "react";
import ListUser from "../component/admin/listUser";
import HeaderAdmin from "../layout/headerAdmin";
import FooterAmin from "../layout/footerAdmin";
import CreateUser from "../component/admin/createUser";

const Admin = () => {
  const [isTab, SetTab] = useState(true);
  const handleActiveTab = (e) => {
    SetTab(e);
  };
  return (
    <>
      <div className="admin" style={{ position: "relative", height: "100%" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "231px" }}></div>
          <HeaderAdmin handleActiveTab={handleActiveTab} />

          <main
            style={{
              width: "85%",
              margin: "0 auto",
              borderLeft: "1px solid gray",
            }}
          >
            <div style={{ height: "80px" }}></div>
            <div className="container pt-4" style={{ width: "100%" }}>
              {isTab ? <ListUser /> : <CreateUser />}
            </div>
            <div style={{ height: "150px" }}></div>
          </main>
        </div>

        <FooterAmin />

        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Admin;
{
  /* <script>
        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                datasets: [
                    {
                        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
                        lineTension: 0,
                        backgroundColor: "transparent",
                        borderColor: "#007bff",
                        borderWidth: 4,
                        pointBackgroundColor: "#007bff",
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false,
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
            },
        });
    </script> */
}
