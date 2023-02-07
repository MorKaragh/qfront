(ns qfront.features.left-menu.left-menu
  (:require
   [qfront.features.left-menu.external-apps-menu :as exapps]
   [qfront.features.identity.identity-menu :as idmenu]))


(defn left-menu []
  [:div {:id "left-menu"}
   [exapps/apps-menu]
   [idmenu/identity-menu]])

