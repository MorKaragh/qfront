(ns qfront.shared.utils.map-utils-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [qfront.shared.utils.map-utils :as mu]))



(deftest uniq-in-second-test [] 
  (let [fir {:a "a" :b "b" :c "c"}
        sec {:b "b" :c "c" :d "d"}] 
    (is (= (mu/uniq-in-second-map fir sec) {:d "d"}))))

(cljs.test/run-tests)