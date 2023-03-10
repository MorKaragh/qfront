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
   [:button {:on-click #(rf/dispatch [:navigate (r/match-by-path router "/")])} "Identity editor"]
   [:button {:on-click #(rf/dispatch [:navigate (r/match-by-path router "/entity")])} "Entity editor"]
   [:button {:on-click #(rf/dispatch [:test-click])} "TEST"]])
