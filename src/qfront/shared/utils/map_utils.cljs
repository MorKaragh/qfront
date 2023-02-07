(ns qfront.shared.utils.map-utils)

(defn update-map [map [k,v]]
  (if (contains? map k)
    (dissoc map k)
    (assoc map k v)))

(defn intersect-keys [mor les]
  (filter  #(not (nil? %)) (map #(get mor %) (keys les))))

(defn uniq-in-second-map 
  "returns map entries presented only in second parameter"
  [fir sec]
  (apply dissoc sec (keys fir)))

(defn unique-in-second-vec [fir sec]
  (let [firset (into #{} fir)
        secset (into #{} sec)]
    (filter (fn [e] (not (contains? firset e))) secset)))
