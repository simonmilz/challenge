import * as React from 'react';
import PersonDto from '../../domain/person.dto';
import {Icon} from 'antd';
import {Tag} from 'antd/es';
import classes from './cellRender.module.css'

export const personCell = (text, record: PersonDto) =>
	<div>
		<span> {`${record.firstname} ${record.lastname}`}</span>
	</div>

export const statusCell = (text, record: PersonDto) =>
	<div>
		{
			record.isActive ? <Icon className={classes.iconBlue} type="check"/> :
				<Icon className={classes.iconRed} type="stop"/>
		}
	</div>
export const friendsCell = (text, record: PersonDto) =>
	<span>
          {record.friends.map(friend => (
			  <Tag color="blue" key={friend.id}>
				  {friend.name}
			  </Tag>
		  ))}
        </span>