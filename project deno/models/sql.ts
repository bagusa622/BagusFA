interface ISql {
    [index : string] : string;
}

const TSql = {} as ISql;
TSql['KtgFindAll'] = "Select * from tbl_kategori;";
TSql['KtgFindByKode'] = "Select * from tbl_kategori where kode = $1;";
TSql['KtgFindInKode'] = "Select * from tbl_kategori where kode in($1, $2, $3);";
TSql['BlogInfoFindAll'] = "Select * from tbl_bloginfo;";
TSql['InsUser'] = "insert into tbl_user (username, fullname, paswd) values ($1, $2, MD5($3));";
TSql['SelUser'] = "select username, fullname from tbl_user where username = $1 and paswd =  MD5($2);";
export default TSql;
