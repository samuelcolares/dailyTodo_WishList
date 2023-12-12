// import { RootState } from "@/providers/store/cart-store";
import { Task } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/providers/store/task-store";

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

function checkLocalStorage() {
  return new Promise((resolve, reject) => {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      try {
        const parsedTasks: Task[] = JSON.parse(tasks);
        resolve(parsedTasks);
      } catch (error) {
        reject("Erro ao analisar os itens no localStorage.");
      }
    } else {
      resolve([]);
    }
  });
}

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  const response = await checkLocalStorage();
  return response as Task[];
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // const exist = state.tasks.findIndex(
      //   (task) => task.task === action.payload.task
      // );
      state.tasks.push({ ...action.payload });
    },
    removeTask: (state, action) => {
      const i = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks.splice(i, 1);
    },
    updateTaskLabel: (state, action) => {
      const i = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks[i].task = action.payload.task;
      state.tasks[i].priority = action.payload.priority;
    },
    updateTask: (state, action) => {
      const i = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks[i].completed = action.payload.completed;
    },
    updateAllTasks: (state, action) => {
      state.tasks.forEach((task) => {
        task.completed = action.payload.completed;
      });
    },
    deleteAllTasks: (state) => {
      state.tasks.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  addTask,
  removeTask,
  updateTaskLabel,
  updateTask,
  updateAllTasks,
  deleteAllTasks,
} = taskSlice.actions;
export const taskCount = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;

/**
|--------------------------------------------------

 reducers: {
    addToCard: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index].qty < 5 && (state.products[index].qty += 1);
      } else {
        state.products.push({ ...action.payload, qty: 1 });
      }
    },
    removeItem: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products.splice(index, 1);
    },
    updateQty: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index].qty = +action.payload.qty;
    },
  },


|--------------------------------------------------
*/
