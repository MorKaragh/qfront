(ns qfront.features.left-menu.external-apps-menu 
  (:require [re-frame.core :as rf]))

(defn apps-menu []
  [:section {:id "other-apps-layout"}
   [:h2 {:class "section-header"} "EXTERNAL APPS"]
   [:div {:id "mock-api-btn" :on-click
          #(rf/dispatch [:on-framed-app-btn-click
                         "https://mockapi.io/projects/62e8bda693938a545bea403c"])}
    "MOCKAPI.IO"]])