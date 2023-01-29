(ns qfront.shared.utils.mapUtils)

(defn update-map [map [k,v]]
  (if (contains? map k)
    (dissoc map k)
    (assoc map k v)))

(update-map {1 "a" 2 "b" 3 "c"} [4, "d"])

