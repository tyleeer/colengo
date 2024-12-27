"use client";

import React from "react";
import "./CustomerService.css";
import { User } from "lucide-react";

const CustomerService = () => {
  return (
    <div className="border-top-bottom d-flex flex-column align-items-center justify-content-center gap-3">
      <h2 className="text-center">CREATE YOUR PROFESSIONAL ACCOUNT</h2>
      <p>UNLOCK ACCESS TO LATEST COLLECTIONS</p>
      <User size={48} />
      <p className="text-xs text-gray text-center w-75">
        Create an account to explore our comprehensive product catalog, complete
        with high-quality images, detailed specifications, and pricing
        information. Enjoy direct access to our sales team for any questions or
        order inquiries—everything you need, right at your fingertips.
      </p>
      <div className="d-flex justify-content-center gap-5">
        <button type="button" className="btn btn-gold rounded-0 py-2 mt-2">
          PLEASE REGISTER
        </button>
        <button type="button" className="btn btn-gold rounded-0 py-2 mt-2">
          PLAN A CALL
        </button>
      </div>
    </div>
  );
};

export default CustomerService;
