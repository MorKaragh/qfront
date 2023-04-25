(ns qfront.features.gallery.imgbox)

(defn image [hash]
  [:img.imagebox {:src (str "http://localhost:3001/images/" hash)}])