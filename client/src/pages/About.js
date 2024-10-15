import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title= {"About us -Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            An Door to Door website is a digital storefront that allows buyers to purchase products and services online, rather than at a physical location. E-commerce websites can also be used to showcase products, manage shipping, and provide customer service
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
