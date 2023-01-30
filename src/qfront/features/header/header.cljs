(ns qfront.features.header.header
  (:require [qfront.app.state :as state]))

(defn header-controls []
  [:div {:id "header-controls"}
   [:button {:on-click (fn [x] (prn (str "Mul: " @state/multipasports)))} "TEST"]
   [:button {:on-click (fn [x] (prn (str "Mul: " @state/multipasports)))} "TEST 1"]
   [:button {:on-click (fn [x] (prn (str "Mul: " @state/multipasports)))} "TEST 2"]])
