(ns qfront.features.right-part.operation-layout 
  (:require [qfront.features.identity.operation-layout :as idoper]
            [re-frame.core :as rf]))


(defn- framed-app []
  (let [src @(rf/subscribe [:framed-app-url])]
    [:div {:id "frame-container" :class "right-part-section"}
     [:iframe {:src src}]]))

(defn right-part []
  (let [app-url-to-show @(rf/subscribe [:framed-app-url])]
    [:div {:id "right-part"}
     (if
      (nil? app-url-to-show)
       [idoper/identity-operation-layout]
       [framed-app])]))
