import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import Header from "../layout/header";
import api from "../config/api";

const CategoryServices = () => {
  const { id, page } = useParams();
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCategory(id, page);
        localStorage.setItem("category", JSON.stringify(response.data));
        setCategorys(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, page]);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1>Các gói dịch vụ trong   {categorys.map((category) => (category.category))}</h1>
        </div>
        <div className="row g-4">
          {categorys.map((category, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`0.${index + 1}s`}
              key={category.id}
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "250px", height: "200px" }}>
                  <img src={category.imageUrl} alt={category.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h4 className="mb-3">{category.name}</h4>
                <p>{category.description}</p>
                <Link to={`/service/${category.id}`} className="btn">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryServices;
