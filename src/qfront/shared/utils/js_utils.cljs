(ns qfront.shared.utils.js-utils)

(defn e-val [e]
  (-> e .-target .-value))

(defn- map-2-json [m]
  (.stringify js/JSON (clj->js m)))

;; local storage functions

(defn set-local-item [k v]
  (.setItem (.-localStorage js/window) k (map-2-json v)))

(defn get-local-item [k]
  (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) k))))

(defn del-local-item [k]
  (.removeItem (.-localStorage js/window) k))

(defn wrap-date-event [s]
  (js-obj "target"
          (js-obj "value"
                  (.toISOString (js/Date. s)))))

(defn get-element-by-class [class-name]
  (js/document.querySelector (str "." class-name)))