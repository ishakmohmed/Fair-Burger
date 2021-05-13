import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";

import OrderScreen from "../screens/OrderScreen";
import QueueScreen from "../screens/QueueScreen";
import AddFoodScreen from "../screens/AddFoodScreen";
import EditFoodScreen from "../screens/EditFoodScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="queue"
        component={QueueScreen}
        initialParams={{ icon: "people" }}
      />
      <Tab.Screen
        name="add food"
        component={AddFoodScreen}
        initialParams={{ icon: "add" }}
      />
      <Tab.Screen
        name="edit food"
        component={EditFoodScreen}
        initialParams={{ icon: "edit" }}
      />
      <Tab.Screen
        name="order"
        component={OrderScreen}
        initialParams={{ icon: "fastfood" }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
