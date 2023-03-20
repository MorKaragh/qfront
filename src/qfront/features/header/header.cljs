(ns qfront.features.header.header
  (:require
   [re-frame.core :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.core :as r]))

(defn href
  "Return relative url for given route. Url can be used in HTML links."
  ([k]
   (href k nil nil))
  ([k params]
   (href k params nil))
  ([k params query]
   (rfe/href k params query)))

(defn header-controls [{:keys [router]}]
  [:div {:id "header-controls"}
   [:a {:href "/"} "root"]
   [:a {:href "entity"} "entity"]
   [:button {:on-click #(rf/dispatch [:test-click])} "TEST"]])
