// @flow

import React from 'react';
import classnames from 'classnames'
import style from './tabs.style.scss'

export default class Tabs extends React.Component {
    props: {
        activeTab: string,
        onClick: (active: string) => void
    };

    render() {
        return (
            <div className={style['body']}>
                {/*<ul className={style['tabs']}>*/}
                    {/*<li className={style['item']}>*/}
                        {/*<button*/}
                            {/*className={classnames(*/}
                                {/*style['button'],*/}
                                {/*{[style['active']]: this.props.activeTab === '1'}*/}
                            {/*)}*/}
                            {/*onClick={() => {this.props.onClick('1')}}*/}
                        {/*>*/}
                            {/*Item 1*/}
                        {/*</button>*/}
                    {/*</li>*/}
                    {/*<li className={style['item']}>*/}
                        {/*<button*/}
                            {/*className={classnames(*/}
                                {/*style['button'],*/}
                                {/*{[style['active']]: this.props.activeTab === '2'}*/}
                            {/*)}*/}
                            {/*onClick={() => {this.props.onClick('2')}}*/}
                        {/*>*/}
                            {/*Item 2*/}
                        {/*</button>*/}
                    {/*</li>*/}
                    {/*<li className={style['item']}>*/}
                        {/*<button*/}
                            {/*className={classnames(*/}
                                {/*style['button'],*/}
                                {/*{[style['active']]: this.props.activeTab === '3'}*/}
                            {/*)}*/}
                            {/*onClick={() => {this.props.onClick('3')}}*/}
                        {/*>*/}
                            {/*Item 3*/}
                        {/*</button>*/}
                    {/*</li>*/}
                    {/*<li className={style['item']}>*/}
                        {/*<button*/}
                            {/*className={classnames(*/}
                                {/*style['button'],*/}
                                {/*{[style['active']]: this.props.activeTab === '4'}*/}
                            {/*)}*/}
                            {/*onClick={() => {this.props.onClick('4')}}*/}
                        {/*>*/}
                            {/*Item 4*/}
                        {/*</button>*/}
                    {/*</li>*/}
                    {/*<li className={style['item']}>*/}
                        {/*<button*/}
                            {/*className={classnames(*/}
                                {/*style['button'],*/}
                                {/*{[style['active']]: this.props.activeTab === '5'}*/}
                            {/*)}*/}
                            {/*onClick={() => {this.props.onClick('5')}}*/}
                        {/*>*/}
                            {/*Item 5*/}
                        {/*</button>*/}
                    {/*</li>*/}
                {/*</ul>*/}
            </div>
        )
    }
}
