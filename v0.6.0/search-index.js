var N = null;var searchIndex = {};
searchIndex["winreg"]={"doc":"Crate for accessing MS Windows registry","items":[[6,"HKEY","winreg","",N,N],[3,"RegKeyMetadata","","Metadata returned by `RegKey::query_info`",N,N],[12,"sub_keys","","",0,N],[12,"max_sub_key_len","","",0,N],[12,"max_class_len","","",0,N],[12,"values","","",0,N],[12,"max_value_name_len","","",0,N],[12,"max_value_len","","",0,N],[3,"RegValue","","Raw registry value",N,N],[12,"bytes","","",1,N],[12,"vtype","","",1,N],[3,"RegKey","","Handle of opened registry key",N,N],[3,"EnumKeys","","Iterator over subkeys names",N,N],[3,"EnumValues","","Iterator over values",N,N],[0,"enums","","`use winreg::enums::*;` to import all needed enumerations and constants",N,N],[17,"HKEY_CLASSES_ROOT","winreg::enums","",N,N],[17,"HKEY_CURRENT_USER","","",N,N],[17,"HKEY_LOCAL_MACHINE","","",N,N],[17,"HKEY_USERS","","",N,N],[17,"HKEY_PERFORMANCE_DATA","","",N,N],[17,"HKEY_PERFORMANCE_TEXT","","",N,N],[17,"HKEY_PERFORMANCE_NLSTEXT","","",N,N],[17,"HKEY_CURRENT_CONFIG","","",N,N],[17,"HKEY_DYN_DATA","","",N,N],[17,"HKEY_CURRENT_USER_LOCAL_SETTINGS","","",N,N],[17,"KEY_QUERY_VALUE","","",N,N],[17,"KEY_SET_VALUE","","",N,N],[17,"KEY_CREATE_SUB_KEY","","",N,N],[17,"KEY_ENUMERATE_SUB_KEYS","","",N,N],[17,"KEY_NOTIFY","","",N,N],[17,"KEY_CREATE_LINK","","",N,N],[17,"KEY_WOW64_32KEY","","",N,N],[17,"KEY_WOW64_64KEY","","",N,N],[17,"KEY_WOW64_RES","","",N,N],[17,"KEY_READ","","",N,N],[17,"KEY_WRITE","","",N,N],[17,"KEY_EXECUTE","","",N,N],[17,"KEY_ALL_ACCESS","","",N,N],[4,"RegType","","Enumeration of possible registry value types",N,N],[13,"REG_NONE","","",2,N],[13,"REG_SZ","","",2,N],[13,"REG_EXPAND_SZ","","",2,N],[13,"REG_BINARY","","",2,N],[13,"REG_DWORD","","",2,N],[13,"REG_DWORD_BIG_ENDIAN","","",2,N],[13,"REG_LINK","","",2,N],[13,"REG_MULTI_SZ","","",2,N],[13,"REG_RESOURCE_LIST","","",2,N],[13,"REG_FULL_RESOURCE_DESCRIPTOR","","",2,N],[13,"REG_RESOURCE_REQUIREMENTS_LIST","","",2,N],[13,"REG_QWORD","","",2,N],[4,"RegDisposition","","Enumeration of possible disposition values",N,N],[13,"REG_CREATED_NEW_KEY","","",3,N],[13,"REG_OPENED_EXISTING_KEY","","",3,N],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"clone","","",2,[[["self"]],["regtype"]]],[11,"eq","","",2,[[["self"],["regtype"]],["bool"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"clone","","",3,[[["self"]],["regdisposition"]]],[11,"eq","","",3,[[["self"],["regdisposition"]],["bool"]]],[0,"types","winreg","Traits for loading/saving Registry values",N,N],[8,"FromRegValue","winreg::types","A trait for types that can be loaded from registry values.",N,N],[10,"from_reg_value","","",4,[[["regvalue"]],["result"]]],[8,"ToRegValue","","A trait for types that can be written into registry values.",N,N],[10,"to_reg_value","","",5,[[["self"]],["regvalue"]]],[0,"transaction","winreg","Structure for a registry transaction.  Part of `transactions` feature.",N,N],[3,"Transaction","winreg::transaction","",N,N],[12,"handle","","",6,N],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"new","","",6,[[],["result",["transaction"]]]],[11,"commit","","",6,[[["self"]],["result"]]],[11,"rollback","","",6,[[["self"]],["result"]]],[11,"drop","","",6,[[["self"]]]],[11,"fmt","winreg","",0,[[["self"],["formatter"]],["result"]]],[11,"default","","",0,[[],["regkeymetadata"]]],[11,"eq","","",1,[[["self"],["regvalue"]],["bool"]]],[11,"ne","","",1,[[["self"],["regvalue"]],["bool"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"predef","","Open one of predefined keys:",7,[[["hkey"]],["regkey"]]],[11,"raw_handle","","Return inner winapi HKEY of a key:",7,[[["self"]],["hkey"]]],[11,"open_subkey","","Open subkey with `KEY_READ` permissions. Will open another handle to itself if `path` is an empty string. To open with different permissions use `open_subkey_with_flags`. You can also use `create_subkey` to open with `KEY_ALL_ACCESS` permissions.",7,[[["self"],["p"]],["result",["regkey"]]]],[11,"open_subkey_with_flags","","Open subkey with desired permissions. Will open another handle to itself if `path` is an empty string.",7,[[["self"],["p"],["regsam"]],["result",["regkey"]]]],[11,"open_subkey_transacted","","Part of `transactions` feature.",7,[[["self"],["p"],["transaction"]],["result",["regkey"]]]],[11,"open_subkey_transacted_with_flags","","Part of `transactions` feature.",7,[[["self"],["p"],["transaction"],["regsam"]],["result",["regkey"]]]],[11,"create_subkey","","Create subkey (and all missing parent keys) and open it with `KEY_ALL_ACCESS` permissions. Will just open key if it already exists. If succeeds returns a tuple with the created subkey and its disposition, which can be `REG_CREATED_NEW_KEY` or `REG_OPENED_EXISTING_KEY`. Will open another handle to itself if `path` is an empty string. To create with different permissions use `create_subkey_with_flags`.",7,[[["self"],["p"]],["result"]]],[11,"create_subkey_with_flags","","",7,[[["self"],["p"],["regsam"]],["result"]]],[11,"create_subkey_transacted","","Part of `transactions` feature.",7,[[["self"],["p"],["transaction"]],["result"]]],[11,"create_subkey_transacted_with_flags","","Part of `transactions` feature.",7,[[["self"],["p"],["transaction"],["regsam"]],["result"]]],[11,"copy_tree","","Copy all the values and subkeys from `path` to `dest` key. WIll copy the content of `self` if `path` is an empty string.",7,[[["self"],["p"],["regkey"]],["result"]]],[11,"query_info","","",7,[[["self"]],["result",["regkeymetadata"]]]],[11,"enum_keys","","Return an iterator over subkeys names.",7,[[["self"]],["enumkeys"]]],[11,"enum_values","","Return an iterator over values.",7,[[["self"]],["enumvalues"]]],[11,"delete_subkey","","Delete key.Key names are not case sensitive. Cannot delete if it has subkeys. Use `delete_subkey_all` for that.",7,[[["self"],["p"]],["result"]]],[11,"delete_subkey_transacted","","Part of `transactions` feature.",7,[[["self"],["p"],["transaction"]],["result"]]],[11,"delete_subkey_all","","Recursively delete subkey with all its subkeys and values. If `path` is an empty string, the subkeys and values of this key are deleted.",7,[[["self"],["p"]],["result"]]],[11,"get_value","","Get a value from registry and seamlessly convert it to the specified rust type with `FromRegValue` implemented (currently `String`, `u32` and `u64`). Will get the `Default` value if `name` is an empty string.",7,[[["self"],["n"]],["result"]]],[11,"get_raw_value","","Get raw bytes from registry value. Will get the `Default` value if `name` is an empty string.",7,[[["self"],["n"]],["result",["regvalue"]]]],[11,"set_value","","Seamlessly convert a value from a rust type and write it to the registry value with `ToRegValue` trait implemented (currently `String`, `&str`, `u32` and `u64`). Will set the `Default` value if `name` is an empty string.",7,[[["self"],["n"],["t"]],["result"]]],[11,"set_raw_value","","Write raw bytes from `RegValue` struct to a registry value. Will set the `Default` value if `name` is an empty string.",7,[[["self"],["n"],["regvalue"]],["result"]]],[11,"delete_value","","Delete specified value from registry. Will delete the `Default` value if `name` is an empty string.",7,[[["self"],["n"]],["result"]]],[11,"encode","","Save `Encodable` type to a registry key. Part of `serialization-serde` feature.",7,[[["self"],["t"]],["result",["encodererror"]]]],[11,"decode","","Load `Decodable` type from a registry key. Part of `serialization-serde` feature.",7,[[["self"]],["result",["decodererror"]]]],[11,"drop","","",7,[[["self"]]]],[11,"next","","",8,[[["self"]],["option",["result"]]]],[11,"next","","",9,[[["self"]],["option",["result"]]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"into_iter","","",8,[[["self"]],["i"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"into_iter","","",9,[[["self"]],["i"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"from","winreg::enums","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"from","winreg::transaction","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]]],"paths":[[3,"RegKeyMetadata"],[3,"RegValue"],[4,"RegType"],[4,"RegDisposition"],[8,"FromRegValue"],[8,"ToRegValue"],[3,"Transaction"],[3,"RegKey"],[3,"EnumKeys"],[3,"EnumValues"]]};
initSearch(searchIndex);
