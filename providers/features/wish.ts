import { Wish } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/providers/store";

export interface wishState {
  wishes: Wish[];
}

const initialState: wishState = {
  wishes: [],
};

function checkLocalStorage() {
  return new Promise((resolve, reject) => {
    const wishes = localStorage.getItem("wishes");

    if (wishes) {
      try {
        const parsedwishes: Wish[] = JSON.parse(wishes);
        resolve(parsedwishes);
      } catch (error) {
        reject("Erro ao analisar os itens no localStorage.");
      }
    } else {
      resolve([]);
    }
  });
}

export const fetchWishes = createAsyncThunk("fetchWishes", async () => {
  const response = await checkLocalStorage();
  return response as Wish[];
});

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addWish: (state, action) => {
      state.wishes.push({ ...action.payload });
    },
    removeWish: (state, action) => {
      const i = state.wishes.findIndex((wish) => wish.id === action.payload.id);
      state.wishes.splice(i, 1);
    },
    updateWishLabel: (state, action) => {
      const i = state.wishes.findIndex((wish) => wish.id === action.payload.id);
      state.wishes[i].wish = action.payload.wish;
      state.wishes[i].priority = action.payload.priority;
    },
    deleteAllWishes: (state) => {
      state.wishes.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWishes.fulfilled, (state, action) => {
      state.wishes = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  addWish,
  removeWish,
  updateWishLabel,
  deleteAllWishes,
} = wishSlice.actions;
export const wishCount = (state: RootState) => state.wish.wishes;

export default wishSlice.reducer;

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
