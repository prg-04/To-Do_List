import Store from "./store";

describe("Store", () => {
  let store;

  beforeEach(() => {
    // Create a new instance of Store before each test
    store = new Store("testKey");

    // Clear the localStorage
    localStorage.clear();
  });

  afterEach(() => {
    // Clean up after each test
    store = null;
    localStorage.clear();
  });

  describe("getItems", () => {
    it("should return an empty array if the localStorage is empty", () => {
      // Call the getItems function
      const items = store.getItems();

      // Verify that an empty array is returned
      expect(items).toEqual([]);
    });

    it("should return an empty array if the localStorage value is not a valid JSON", () => {
      // Set an invalid JSON value in the localStorage
      localStorage.setItem("testKey", "invalidJSON");

      // Call the getItems function
      const items = store.getItems();

      // Verify that an empty array is returned
      expect(items).toEqual([]);
    });

    it("should return the parsed array from the localStorage value", () => {
      // Create a sample array
      const sampleArray = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
      ];

      // Set the sample array as a JSON value in the localStorage
      localStorage.setItem("testKey", JSON.stringify(sampleArray));

      // Call the getItems function
      const items = store.getItems();

      // Verify that the parsed array is returned
      expect(items).toEqual(sampleArray);
    });
  });

  describe("setItems", () => {
    it("should set the items as a JSON string in the localStorage", () => {
      // Create a sample array
      const sampleArray = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
      ];

      // Call the setItems function
      store.setItems(sampleArray);

      // Verify that the JSON string is set in the localStorage
      expect(localStorage.getItem("testKey")).toBe(JSON.stringify(sampleArray));
    });
  });
});
