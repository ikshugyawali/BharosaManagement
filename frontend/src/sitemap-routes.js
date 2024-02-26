import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route exact path="/" />
    <Route path="/about-us" />
    <Route path="/careers" />
    <Route path="/careers/:id" />
    <Route path="/team" />
    <Route path="/blogs" />
    <Route path="/blogs/agile-methodologies-and-their-benefits-in-software-development" />
    <Route path="/blogs/2" />
    <Route path="/blogs/3" />
    <Route path="/blogs/devOps-and-CI-CD-in-software-development" />
    <Route path="/contact-us" />
    <Route path="/privacy-policy" />
    <Route path="/services/website-development" />
    <Route path="/services/software-development" />
    <Route path="/services/mobile-development" />
    <Route path="/services/it-outsourcing" />
    <Route path="/services/it-consultation" />
    <Route path="/services/seo" />
    <Route path="/services/process-automation" />
    <Route path="/services/data-analytics-and-visualization" />
    <Route path="*" />
  </Route>
);
