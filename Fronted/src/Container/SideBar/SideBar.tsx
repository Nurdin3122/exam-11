import React, { useEffect } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { categoriesLoading, categoriesState } from "../../Components/Categories/CategoriesSlice.ts";
import { getCategories } from "../../Components/Categories/CategoriesThunks.ts";
import Spinner from "../../Components/Spinner/Spinner.tsx";

const SideBar = () => {
    const categories = useAppSelector(categoriesState);
    const loading = useAppSelector(categoriesLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                        <CDBSidebar textColor="#fff" backgroundColor="#333">
                            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                                <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                                    Categories
                                </a>
                            </CDBSidebarHeader>

                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>
                                    {categories.map(category => (
                                        <NavLink key={category._id}  to={`/categories/${category._id}`}>
                                            <CDBSidebarMenuItem icon="columns">{category.title}</CDBSidebarMenuItem>
                                        </NavLink>
                                    ))}
                                </CDBSidebarMenu>
                            </CDBSidebarContent>

                            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                                <div style={{ padding: '20px 5px' }}>
                                    Sidebar Footer
                                </div>
                            </CDBSidebarFooter>
                        </CDBSidebar>
                    </div>
                )
            }
        </>
    );
};

export default SideBar;
