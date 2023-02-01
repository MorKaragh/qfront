(ns qfront.features.header.header
  (:require 
   [re-frame.core :as rf]
   ))

(defn header-controls []
  [:div {:id "header-controls"}
   [:button {:on-click (fn [x] (rf/dispatch [:test-click]))} "TEST"]])
