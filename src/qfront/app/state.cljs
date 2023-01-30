(ns qfront.app.state
  (:require [reagent.core :as r]))


(def multipasports (r/atom []))

(defn get-by-id [id]
  (first (filter #(= (:id %) (str id)) @multipasports)))


(def edited (r/atom {}))

