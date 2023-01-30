(ns qfront.pages.identityeditor
  (:require
    [qfront.features.identity.operation :as oper]
    [qfront.features.identity.profilelayout :as prof]
    [qfront.features.header.header :as header]))

(defn home-page []
  [:div {:id "main-page"}
   [:header
    [:h2 "People of the world"]
    [header/header-controls]]
   [:main {:id "working-zone"}
    [prof/user-profile-layout]
    [oper/operation-layout prof/local-state]]])