(ns qfront.pages.mainpage
  (:require [qfront.features.header.header :as header]
            [qfront.features.left-menu.left-menu :refer [left-menu]]
            [qfront.features.right-part.operation-layout :refer [right-part]]))

(defn home-page []
  [:div {:id "main-page"}
   [:header {:id "main-header"}
    [:h2 "People of the world"]
    [header/header-controls]]
   [:main {:id "working-zone"} 
    [left-menu]
    [right-part]
    ]])