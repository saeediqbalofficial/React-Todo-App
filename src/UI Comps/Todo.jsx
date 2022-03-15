import React, { useState } from "react";
import "./Todo.css";
import AddItem from "./AddItem";
const myData = [
  // {
  //   id: 1,
  //   title: "Study React JS ",
  //   desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  //   date: "11th March, 2022",
  // },
  // {
  //   id: 2,
  //   title: "Study Digital Marketing",
  //   desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  //   date: "12th March, 2022",
  // },
  // {
  //   id: 3,
  //   title: "Study Email Marketing ",
  //   desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  //   date: "13th March, 2022",
  // },
  // {
  //   id: 4,
  //   title: "Study Instagram Marketing",
  //   desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  //   date: "14th March, 2022",
  // },
];

const Todo = () => {
  const [newItemAdd, setNewItemAdd] = useState(myData);
  const removeItem = (id) => {
    console.log(" Item ID : ", id);

    const updatedArray = newItemAdd.filter((curentitem) => {
      return curentitem.id !== id;
    });
    setNewItemAdd(updatedArray);
    alert("Item Removed ID : " + id);
  };
  const completeHandler = (id) => {
    alert("Task Completed", id);
  };
  const setNewItem = (item) => {
    const newArray = [...myData, item];
    console.log(newArray);
    setNewItemAdd(newArray);
    alert("New Record Added");
  };

  return (
    <div className="todo-lists">
      <div>
        {newItemAdd.map((item) => {
          return (
            <div className="item" id={item.id}>
              <h4 className="title" key={item.id}>
                {item.title}
              </h4>
              <p className="info">
                <span className="disc">{item.desc} </span>
              </p>

              <div className="buttons">
                <span className="date">{item.date}</span>
                <span
                  className="btn"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  Delete
                </span>
                <span
                  className="btn"
                  onClick={() => {
                    completeHandler(item.id);
                  }}
                >
                  Completed
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="addnew-from">
        <AddItem setNewItem={setNewItem} />
      </div>
    </div>
  );
};

export default Todo;
