import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { LatestNews } from "./LatestNews";
import { Photos } from "./Photos";
import { Videos } from "./Videos";
import { Explainers } from "./Explainer";
import { India } from "./India";
import { Entertainment } from "./Entertainment";
import { Sports } from "./Sports";
import {ViralNews} from "./ViralNews";
import {LifeStyles} from "./Lifestyles";
import {Business} from "./Business";
import {World} from "./World";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latestnews" element={<LatestNews />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/explainer" element={<Explainers />} />
      <Route path="/india" element={<India />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/viralnews" element={<ViralNews />} />
      <Route path="/lifestyles" element={<LifeStyles />} />
      <Route path="/business" element={<Business />} />
      <Route path="/world" element={<World />} />
    </Routes>
  );
};
