(ns qfront.pages.mainpage
  (:require [qfront.features.header.header :as header]
            [re-frame.core :as re-frame]))

(defn home-page [{:keys [router]}]
  [:div {:id "main-page"}
   [:header {:id "main-header"}
    [:h2 "People of the world"]
    [header/header-controls {:router router}]]
   (let [current-route @(re-frame/subscribe [:current-route])]
     (when current-route
       [(-> current-route :data :view)]))])

