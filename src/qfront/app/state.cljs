(ns qfront.app.state
  (:require [reagent.core :as r]))


(def multipasports (r/atom []))

(defn get-by-id [id]
  (prn (str "get by " id))
  (first (filter #(= (:id %) (str id)) @multipasports)))


(def edited (r/atom []))
