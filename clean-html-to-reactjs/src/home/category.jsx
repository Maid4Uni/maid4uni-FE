import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../config/api";

const useFetchServices = () => {
  const { id, page } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCategory(id, page);
        setServices(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, page]);

  return {
    services,
  };
};

const CategoryServices = () => {
  const { services } = useFetchServices();

  return (
    <div>
      <h1>Services in Category , Page </h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryServices;
