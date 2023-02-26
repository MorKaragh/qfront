(ns qfront.features.header.header
  (:require 
   [re-frame.core :as rf]
   ))

(defn header-controls []
  [:div {:id "header-controls"}
   [:button {:on-click #(rf/dispatch [:navigate "page1"])} "Page 1"]
   [:button {:on-click #(rf/dispatch [:navigate "page2"])} "Page 2"]
   [:button {:on-click #(rf/dispatch [:test-click])} "TEST"]])
