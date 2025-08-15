import { DateTime, OptimaDB, OptimaTable } from "@inflector/db";
import * as tables from "./tables";
import * as readline from "readline";

const db = new OptimaDB(tables , { mode : "Disk" , path : "data"
});

