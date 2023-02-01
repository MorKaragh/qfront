(ns qfront.pages.mainpage
  (:require
    [qfront.features.identity.operation :as oper]
    [qfront.features.identity.profilelayout :as prof]
    [qfront.features.header.header :as header]))

(defn home-page []
  [:div {:id "main-page"}
   [:header {:id "main-header"}
    [:h2 "People of the world"]
    [header/header-controls]]
   [:main {:id "working-zone"} 
    [prof/left-menu]
    [oper/right-part]
    ]])