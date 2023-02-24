const solution = (bridge_length, weight, truck_weights) => {
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  while (qu.length > 0 || truck_weights.length > 0) {
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      if (qu[0]) time = qu[0][1] - 1;
    }
    time++;
  }
  return time;
};
