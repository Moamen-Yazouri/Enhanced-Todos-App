import React, { useState } from 'react'
import MotionedField from '../motionedField/motionedField'
import MotionedSelect from '../motionedSelect/motionedSelet'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { Save } from 'lucide-react'
import { CardContent, CardFooter } from '../ui/card'
import MotionedTextArea from '../motionedTextarea/motionedTextarea'
import { Form, FormikProvider } from 'formik'
import { Button } from '../ui/button'
import { TodoCategory, TodoProirity, TodoState } from '@/@types'
import useEditTodo from './hook/useEditTodo'
import { CATEGORIES, PRIORITES } from '@/constants/constants'
interface IProps {
    hasExpiration: boolean,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
    title: string,
    description?: string,
    priority: TodoProirity,
    expiresAt?: Date,
    id: string,
    category: TodoCategory
    status: TodoState,
    createdAt: Date,
}
const EditForm = (props: IProps) => {

    const [hasExpiration, setHasExpiration] = useState(props.hasExpiration);
    const formik = useEditTodo({...props})
    return (
        <FormikProvider value={formik}>
            <Form>
                <CardContent className="space-y-6">

                        <MotionedField 
                            type='text'
                            label='Title'
                            name='title'
                            isPassword={false}
                            required={true}
                            placeholder='Enter task title..'
                            style={
                                {
                                    label: "text-sm font-medium flex items-center",
                                    input: "focus-visible:ring-orange-500"
                                }
                            }
                        />
                        <MotionedTextArea
                            label="Description"
                            name='description'
                            placeholder='Enter task description'
                            style={
                                {
                                    label: "text-sm font-medium flex items-center", 
                                    input: "focus-visible:ring-orange-500 min-h-[100px]"
                                }
                            }
                        />
                        <MotionedSelect
                            label='Category'
                            name='category'
                            defaultValue={"personal"}
                            placeholder='Select Category'
                            options = {CATEGORIES}
                            required={true}
                        />

                        <MotionedSelect
                            label='Priority'
                            name='priority'
                            defaultValue={"medium"}
                            placeholder='Select Priority'
                            options = {PRIORITES}
                            required={true}
                        />
                        {/* Expiration Date Field */}
                    <div className="space-y-4 mb-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                            id="hasExpiration"
                            checked={hasExpiration}
                            onCheckedChange={(checked) => {
                                setHasExpiration(checked as boolean)
                            }}
                            className="text-orange-500 focus:ring-orange-500"
                            />
                            <Label htmlFor="hasExpiration" className="text-sm font-medium cursor-pointer">
                            Set expiration date
                            </Label>
                        </div>
                    </div>

                        {hasExpiration && (
                            <MotionedField
                                isPassword={false}
                                type='date'
                                label='Expiration Data'
                                name='expiresAt'
                                min={new Date().toISOString().split("T")[0]}
                                required={hasExpiration}
                            />
                        )}
                </CardContent>


                <CardFooter className="flex justify-end space-x-4 pt-4 border-t text-black mt-5">
                    <Button variant="outline" type="button" onClick={() => props.setIsEditing(false)}>
                        Cancel
                    </Button>
                    <Button type="submit" className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none shadow-md">
                    <Save className="h-4 w-4 mr-2" />
                        {props.status === "deleted" ?  "Recover task" : "Edit task"}
                    </Button>
                </CardFooter>
            </Form>
        </FormikProvider>  
    )
}

export default EditForm