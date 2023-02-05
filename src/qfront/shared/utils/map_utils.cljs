(ns qfront.shared.utils.map-utils)

(defn update-map [map [k,v]]
  (if (contains? map k)
    (dissoc map k)
    (assoc map k v)))

(update-map {1 "a" 2 "b" 3 "c"} [4, "d"])

(defn intersect-keys [mor les]
  (filter  #(not (nil? %)) (map #(get mor %) (keys les))))

(defn uniq-in-second 
  "returns map entries presented only in second parameter"
  [fir sec]
  (apply dissoc sec (keys fir)))

