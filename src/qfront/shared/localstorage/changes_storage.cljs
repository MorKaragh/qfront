(ns qfront.shared.localstorage.changes-storage 
  (:require [qfront.shared.utils.js-utils :as u]
            [qfront.shared.utils.map-utils :as mu]))

(defn get-changes-map []
  (first (filter #(not (nil? %)) [(u/get-local-item "changes") {}])))

(defn add-change [id fld val]
  (let [changes (get-changes-map)]
   (u/set-local-item "changes" (assoc-in changes [id fld] val))))

(defn remove-id [id]
  (let [changes (get-changes-map)]
   (u/set-local-item "changes" (dissoc changes id))))

(defn sync-changes-storage [curr-ids]
  (let [changes (get-changes-map)
        changes-ids (keys changes)]
   (u/set-local-item 
    "changes" 
    (apply dissoc changes (mu/unique-in-second-vec curr-ids changes-ids )))))



