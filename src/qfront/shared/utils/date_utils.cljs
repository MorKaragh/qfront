(ns qfront.shared.utils.date-utils)

(defn parse-iso-date [s]
  (let [date-pattern #"^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$"
        [_ year month day hour minute second millisecond] (re-find date-pattern s)]
    (js/Date. year month (dec day) hour minute second millisecond)))

(defn date? [x]
  (let [date-pattern #"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
    (boolean (re-matches date-pattern (str x)))))
