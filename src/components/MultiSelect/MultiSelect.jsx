import React, { Component } from 'react';
import './MultiSelect.css';
import checkMark from './../../checkmark.png';
import caretDown from './../../caretDown.png';
import caretUp from './../../caretUp.png';
import { isEmpty } from './../../utils';
import OutsideAlerter from './../OutsideAlerter/OutsideAlerter';

const Option = ({ optionData, handleClick, selectedOptions }) => {
    const isShowCheckMark = (id) => {
        let isSelected = selectedOptions.find(item => item.id === id);
        return !isEmpty(isSelected);
    }

    return (
        <div className="option" onClick={()=>handleClick(optionData)}>
            <div className='name'><span>{optionData.value}</span></div>
            <div>{ isShowCheckMark(optionData.id) && <img height={12} src={checkMark} />}</div>
        </div> 
    );
}
class MultiSelect extends Component {
    state = {
        isShowDropdown: false,
        optionBdyClass: 'top-50',
        optionsList: [
            { id: '1', value: 'english' },
            { id: '2', value: 'mandarin' },
            { id: '3', value: 'hokkien' },
            { id: '4', value: 'tamil' },
            { id: '5', value: 'cantonese' },
            { id: '6', value: 'others' }
        ],
        selectedOptions: [],
        beforeSaveSelectedOptions: [],
        otherValue: ''
    }

    selectText = () => {
        const { selectedOptions } = this.state;
        const selectedValues = selectedOptions.reduce((a, o) => (o.value && a.push(o.value), a), []);

        return (
            <span>{!isEmpty(selectedOptions) ? selectedValues.join(', ') : "Select:"}</span>
        )
    }

    isOtherSelected = () => {
        const { beforeSaveSelectedOptions } = this.state;

        let isOtherSelected = beforeSaveSelectedOptions.find(item => item.value === 'others');
        return !isEmpty(isOtherSelected);
    }

    handleOptionClick = (optionData) => {
        const { beforeSaveSelectedOptions } = this.state;

        let selectedOption = beforeSaveSelectedOptions.find(item => item.id === optionData.id);

        this.setState({ 
            beforeSaveSelectedOptions: 
            isEmpty(selectedOption) ? 
                [ ...this.state.beforeSaveSelectedOptions, optionData ] : 
                this.state.beforeSaveSelectedOptions.filter(item => item.id !== optionData.id) 
        })
    }

    handleSaveClick = () => {
        const { beforeSaveSelectedOptions } = this.state;
        let optionsToSave = beforeSaveSelectedOptions.filter(item => item.id !== 'default');
        let defaultOption = { id: 'default', value: 'No Preferences' };
        
        this.setState({ 
            isShowDropdown: false, 
            selectedOptions: !isEmpty(optionsToSave) ? optionsToSave : [defaultOption], 
            beforeSaveSelectedOptions: [],
            otherValue: ''
        })
    }

    handleSelectClick = () => {
        var rect = document.getElementById('options-bdy').getBoundingClientRect()
        this.setState({ 
            isShowDropdown: !this.state.isShowDropdown, 
            beforeSaveSelectedOptions: this.state.selectedOptions,
            optionBdyClass: window.screen.height - rect.y > 296 ? 'top-50' : 'bottom-50'
        })
    }

    render() {
        const { optionBdyClass, isShowDropdown, optionsList, beforeSaveSelectedOptions, selectedOptions, otherValue } = this.state;
        return (
            <div className="component-multi-select">
                <OutsideAlerter outsideClickEvent={() => this.setState({ isShowDropdown: false })}>
                <div className="select-btn">
                    <div onClick={this.handleSelectClick}>
                        {this.selectText()}
                        <img height={12} src={!isShowDropdown ? caretUp : caretDown} className='caret-down' />
                    </div>
                    <div id='options-bdy'>
                    {
                        isShowDropdown &&
                        <>
                            <div className={`options-body ${optionBdyClass}`}>
                            {
                                optionsList.map(item => 
                                    <Option key={item.id} 
                                        optionData={item}
                                        handleClick={this.handleOptionClick}
                                        selectedOptions={beforeSaveSelectedOptions}
                                    /> 
                                )
                            }
                            { 
                                this.isOtherSelected() &&
                                    <div className='input-other'>
                                        <input placeholder='Write other language' value={otherValue} onChange={(e) => this.setState({ otherValue: e.target.value })} />
                                    </div>
                            }  
                            
                            { 
                                (!this.isOtherSelected() || otherValue !== '') && 
                                <button className='save-btn' onClick={this.handleSaveClick}>
                                    Save
                                </button> 
                            }
                            
                            </div>
                        </>
                    }
                    </div>
                </div>
                </OutsideAlerter>
            </div>
        )
    }
}

export default MultiSelect;