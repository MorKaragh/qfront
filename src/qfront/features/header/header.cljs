(ns qfront.features.header.header
  (:require
   [re-frame.core :as rf]
   [reitit.frontend.easy :as rfe]))

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
   [:a {:href "/"} "identity"]
   [:a {:href "blog"} "blog"]
   [:a {:href "square"} "square"]
   [:button {:on-click #(rf/dispatch [:test-click])} "TEST"]])
