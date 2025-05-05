import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Form, FormikProvider } from 'formik'
import MotionedField from '../motionedField/motionedField'
import MotionedSelect from '../motionedSelect/motionedSelet'
import { Save } from 'lucide-react'
import useAddTodo from './hook/useAddTodoForm'
import { CardContent, CardFooter } from '../ui/card'
import MotionedTextArea from '../motionedTextarea/motionedTextarea'
import { OPTIONS } from '@/constants/constants'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'


const AddTodoForm = () => {
    const [hasExpiration, setHasExpiration] = useState<boolean>(false);
    const formik = useAddTodo();
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
                            label='Priority'
                            name='priority'
                            defaultValue={"medium"}
                            placeholder='Select Priority'
                            options = {OPTIONS}
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
                                id='expiresAt'
                                type='date'
                                label='Expiration Data'
                                name='expiresAt'
                                min={new Date().toISOString().split("T")[0]}
                                required={hasExpiration}

                            />
                        )}
                </CardContent>


                <CardFooter className="flex justify-end space-x-4 pt-4 border-t">
                    <Link to="/">
                    <Button variant="outline" type="button">
                        Cancel
                    </Button>
                    </Link>
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Task
                    </Button>
                </CardFooter>
            </Form>
        </FormikProvider>        
    )
}

export default AddTodoForm